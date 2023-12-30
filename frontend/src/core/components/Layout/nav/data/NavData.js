import Button from "@/core/components/button/Button";
import Link from "next/link";

const NavData = {
  fan: {
    items: [
      {
        name: "Home",
        route: "/",
        id: "homebanner",
      },

      {
        name: "View Matches",
        route: "/matches/all-matches",
        id: "matches",
      },
    ],
    components: [
      {
        component: (
          <Link href="/auth/sign-in" className="p-4 text-center centered">
            <Button
              className="centered max-w-[100%] "
              btnclassName="rounded-sm"
            >
              Sign In
            </Button>
          </Link>
        ),
      },
    ],
  },
  admin: {
    items: [
      {
        name: "Home",
        route: "/",
        id: "homebanner",
      },

      {
        name: "View Matches",
        route: "/matches/all-matches",
        id: "matches",
      },
      {
        name: "Create Match",
        route: "/",
        id: "creatematch",
      },
      {
        name: "Add Stadium",
        route: "/",
        id: "addstadium",
      },
    ],
    components: [],
  },
};

export default NavData;
