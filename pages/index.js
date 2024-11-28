import DefaultLayout from "../layouts/default";
import { withIronSessionSsr } from "iron-session/next";
//import { ironOptions } from "../config/session/session_config";

const ironOptions = {
  cookieName: "teesstsd",
  password:"bdae47b7efd823209edb23046c68685d4c92f311742976e145b6b4a7e0b79ed7",
  cookieOptions: {
    secure: false,
    maxAge:3600,
  },

};
export default function Home({ data }) {
  return (
    <DefaultLayout>
      <div className="justify-between h-full text-center ">
        <div className="border  m-5 text-lg border-theme_secondary">www.RSnails</div>
        <div className="  m-5 ">For sale</div>
        <div className="  m-5 ">goldiskiker@gmail.com</div>

    
      </div>
    </DefaultLayout>
  );
}
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
 
    let data = {};

    return {
      props: { data },
    };
  },

  ironOptions
);
