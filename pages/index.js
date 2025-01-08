import DefaultLayout from "../layouts/default";
import Landing_Banner from "../components/index/landing_Banner";
import Quote from "../components/index/quote";
import Introduction from "../components/index/introduction";
import Person from "../components/index/person";
import Jobs from "../components/index/jobs";
import Contact from "../components/reusable/contact";
import config_all from "../config/config";

export default function Home() {
  const config = config_all();
  return (
    <DefaultLayout>
      <Landing_Banner config={config} />
      <Quote config={config} />
      <Introduction config={config} />
      <Person config={config} />
      <Jobs config={config} />
      <Contact config={config} />
    </DefaultLayout>
  );
}
