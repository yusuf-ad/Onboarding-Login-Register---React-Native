import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Link, router } from "expo-router";
import { useForm } from "react-hook-form";
import { Alert, StyleSheet, Text, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StatusBar } from "expo-status-bar";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

const LoginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.output<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: z.output<typeof LoginFormSchema>) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);

    router.replace("/(home)");
  };

  return (
    <>
      <StatusBar backgroundColor="#e67700" style="light" />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Login here</Text>
          <Text style={styles.description}>
            Welcome back you've been missed!
          </Text>
        </View>
        <View style={{ width: "100%", gap: 20, marginBottom: 16 }}>
          <Input
            control={control}
            name="email"
            placeholder="Email"
            error={errors.email?.message}
          />
          <Input
            control={control}
            name="password"
            placeholder="Password"
            keyboardType="visible-password"
            error={errors.password?.message}
          />
        </View>
        <View style={{ gap: 36, width: "100%", marginBottom: 52 }}>
          <View style={{ alignSelf: "flex-end" }}>
            <Text style={[{ color: "#e67700" }, styles.actionText]}>
              Forgot your password?
            </Text>
          </View>
          <View style={{ width: "100%", height: 54 }}>
            <Button isLoading={loading} onPress={handleSubmit(onSubmit)}>
              Sign in
            </Button>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Link
              href={"/register"}
              style={[{ color: "#494949" }, styles.actionText]}
            >
              Create new account
            </Link>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={[{ color: "#e67700", marginBottom: 2 }, styles.actionText]}
          >
            Or continue with
          </Text>
          <SocialMediaIcons />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 24,
    color: "#e67700",
  },

  description: {
    color: "#212529",
    letterSpacing: 0.4,
    width: 240,
    lineHeight: 28,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 48,
    paddingHorizontal: 8,
  },

  actionText: {
    fontSize: 16,
    fontWeight: "600",
  },

  errorText: {
    marginTop: 8,
    color: "#c92a2a",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Login;
