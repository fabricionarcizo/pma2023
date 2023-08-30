<p align="center">
  <b>The fastest way to create universal React Native apps</b>
  <br />

  <p align="center">
    <!-- iOS -->
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-000.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
    <!-- Android -->
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-000.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
    <!-- Web -->
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-000.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </p>
  <p align="center">
    <a href="https://packagephobia.now.sh/result?p=create-react-native-app">
      <img alt="the best way to bootstrap a react native app" longdesc="the best way to create a react native app" src="https://flat.badgen.net/packagephobia/install/create-react-native-app" />
    </a>
  </p>
  
</p>

<!-- Body -->

```sh
npx create-react-native-app
```

Once you're up and running with Create React Native App, visit [this tutorial](https://reactnative.dev/docs/tutorial) for more information on building mobile apps with React.

## Features

- Native project ready to be built on to your device.
- Support for unimodules and auto-linking.
- OTA updates, and Gestures out of the box.
- Full support for React Native web.
- Plug-n-play custom templates.
- Works with the Expo Client app.

## Usage

- `npx create-react-native-app` Create a new native React app.
- `yarn ios` -- (`expo run:ios`) Build the iOS App (requires a MacOS computer).
- `yarn android` -- (`expo run:android`) Build the Android App.
- `yarn web` -- (`expo start:web`) Run the website in your browser.

### Templates

By default you create a [bare-workflow React](https://docs.expo.io/bare/exploring-bare-workflow/) project with support for iOS, Android, and web. You can opt to use an example project instead by selecting the "Templates from ..." option. Custom templates can be used with `--template <Example Name or GitHub URL>` option.

- Use an [example](https://github.com/expo/examples): `npx create-react-native-app -t with-typescript`
- Use a custom template: `npx create-react-native-app --template https://github.com/someone/my-react-starter` -- Only works with GitHub repos on the master branch.
- All examples can be modified in the [expo/examples](https://github.com/expo/examples) repo.

## Sections

- [Usage with Expo Client App](#usage-with-expo-client-app)
- [Support and Contact](#support-and-contact)
- [FAQs](#faqs)
- [Contributing](#contributing)

## Usage with Expo Go App

Expo Client enables you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started) in `react-native`, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest) that the are bundled with the Expo App.

Expo Client supports running any project that doesn't have custom native modules added.

- Download the "Expo Go" app from the Play Store or App Store.
- Start your project with Expo
  - Install the CLI `npm i -g expo-cli`
  - Start the project `expo start`
- Open the project:
  - Sign in to expo and the project will appear in the app.
  - Or point your phone's camera at the QR code in the terminal (press "c" to view it).

## Support and Contact

If you're having issues with Create React Native App, please make sure:

- The issue is not covered in the [Expo Docs](https://docs.expo.io/versions/latest/)
- There is not already an [open issue](https://github.com/expo/expo-cli/issues) for your particular problem

If you've checked the documentation and currently open issues, please either [open a new GitHub issue](https://github.com/expo/create-react-native-app/issues/new) or ask a question on [Expo forums](https://forums.expo.io/c/help).

## Contributing

Please see [Contributing guide](https://github.com/expo/expo-cli/blob/master/CONTRIBUTING.md) in the Expo CLI monorepo for instructions on contributing to Expo CLI.

### Attribution

The examples feature was inspired by the `templates` system of [create-next-app](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) by the [Vercel](https://vercel.com/) team.

## Related

CRNA is focused on being the fastest way to bootstrap a React Native app without worrying about the native platforms or bundlers required for developing and shipping apps. Other tools provide both an init script (which is slower) and a suite of other tools that can be used for interacting with the project. CRNA is meant to be used with any of the following tools:

- [Expo CLI](https://github.com/expo/expo-cli) by [Expo team](https://expo.io)
- [Ignite CLI](https://github.com/infinitered/ignite) by [Infinite Red](https://infinite.red/)
- [React Native Community CLI](https://github.com/react-native-community/cli) by members of [the React Native community](https://github.com/orgs/react-native-community/people)
