import Image from "next/image";
import { Box } from "@mui/system";

const Page=({ params }: { params: { id: string } })=> {
  return (
    <Box sx={{ padding: "20px" }}>
      <h2>article {params.id}</h2>
      <Image
        src={`/assets/images/articles/${params.id}.webp`}
        width={198}
        height={50}
        layout="responsive"
        objectFit="cover"
        alt={`image ${params.id}`}
      />
      <p>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  
      </p>
    </Box>
  );
}
export default Page;