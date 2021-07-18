import { HomeProps, IPlugin } from "../pages";

import { NextPage } from "next";

function sortPlugins(array: IPlugin[], key: keyof IPlugin) {
  return array.sort(function (a, b) {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

const withInitPlugins = (home: NextPage<HomeProps, HomeProps>) => {
  home.getInitialProps = async () => {
    const result = await fetch(
      "https://raw.githubusercontent.com/nrwl/nx/master/community/approved-plugins.json"
    );
    const initPlugins: IPlugin[] = sortPlugins(await result.json(), "name");
    return { initPlugins };
  };
  return { home };
};

export default withInitPlugins;
