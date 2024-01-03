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
    components: {
      login: (
        <Link href="/auth/sign-in" className="p-4 text-center centered">
          <Button className="centered max-w-[100%] " btnclassName="rounded-sm">
            Sign In
          </Button>
        </Link>
      ),
      logout: (
        <Button className="centered max-w-[100%] " btnclassName="rounded-sm">
          Log Out
        </Button>
      ),
    },
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
        route: "/stadium/add-stadium",
        id: "addstadium",
      },
    ],
    components: {
      login: null,
      logout: (
        <Button className="centered max-w-[100%] " btnclassName="rounded-sm">
          Log Out
        </Button>
      ),
    },
  },
};

export default NavData;
