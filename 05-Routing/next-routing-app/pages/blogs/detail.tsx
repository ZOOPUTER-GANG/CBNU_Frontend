import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();

  const id = router.query.id;
  const name = router.query.name;

  return (
    <div className="h-[500px]">
      웹페이지정보 : {id}={name}
    </div>
  );
};

export default BlogDetail;
