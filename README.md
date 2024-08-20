# React Native Onboarding Page

### Tarih: 20.08.2024

İlerleme: Bugün, giriş sayfası için ana ekranı ekleyip layoutu tamamladım ve tekrar kullanılabilir bir buton bileşeni oluşturdum.

![Home page](./assets/home-page.jpeg)

Sonraki Adımlar: Navigation için route ayarlarını yaparken bir TypeScript hatasıyla karşılaştım, bunu çözmem gerekiyor.

Böyle yaptığımda bu hatayı alıyorum:

Argument of type '"/login"' is not assignable to parameter of type 'Href<string | object>'.ts(2345)

```jsx
<Button onPress={() => router.push("/login")}>Login</Button>
```

Editör böyle yapmamı istiyor. Ama böyle de unmatched route hatası alıyorum.

```jsx
<Button
  onPress={() => router.push("/(auth)\register")}
  backgroundColor="#f1f3f5"
  textColor="#000"
>
  Register
</Button>
```
