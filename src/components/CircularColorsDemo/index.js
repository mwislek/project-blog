import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";

export default dynamic(
  () => import('./CircularColorsDemo'),
  { loading: Spinner }
);

