import Home from "@/app/(afterLogin)/home/page";

type Props = {
  params: { username: string; id: string; photoId: string };
};
export default function PhotoId({ params }: Props) {
  return <Home />;
}
