import BackgroundPattern from "@/components/BackgroundPattern";
import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { useAuthStore } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, StyleSheet, Text, View } from "react-native";
import { z } from "zod";

const RegisterFormSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // This will show the error message at the confirmPassword field
  });

function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.output<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
  });
  const [loading, setLoading] = useState(false);
  const setSession = useAuthStore((state) => state.setSession);

  const onSubmit = async (data: z.output<typeof RegisterFormSchema>) => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setLoading(false);

      return Alert.alert(error.message);
    }
    if (!session) {
      setLoading(false);

      return Alert.alert(
        "An error occurred. Please try again later or contact support."
      );
    }

    setLoading(false);
    setSession(session?.access_token as string);
    router.replace("/(home)");
  };

  return (
    <>
      <StatusBar backgroundColor="#e67700" style="light" />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.description}>
            Create an account to capture and cherish your life's precious
            moments.
          </Text>
        </View>
        <View style={{ width: "100%", gap: 20, marginBottom: 32 }}>
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
            secureTextEntry={true}
            error={errors.password?.message}
          />
          <Input
            control={control}
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry={true}
            error={errors.confirmPassword?.message}
          />
        </View>
        <View style={{ gap: 36, width: "100%" }}>
          <View style={{ width: "100%", height: 54 }}>
            <Button isLoading={loading} onPress={handleSubmit(onSubmit)}>
              Sign up
            </Button>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Link
              href={"/login"}
              style={[{ color: "#494949" }, styles.actionText]}
            >
              Already have an account
            </Link>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 48 }}>
          <Text
            style={[{ color: "#e67700", marginBottom: 2 }, styles.actionText]}
          >
            Or continue with
          </Text>
          <SocialMediaIcons />
        </View>

        <BackgroundPattern />
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

export default Register;
