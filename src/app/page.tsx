
import { Container, Grid, Button } from "@mui/material";
import ArticleCard from "@/component/ArticleCard";
import Link from "next/link";

const Home=()=> {
  return (
    <main>
         <Container maxWidth="lg">
        <Grid container spacing={4} mt={4}>
          <Grid md={6} xs={12}>
            <h2>مقاله‌ها</h2>
          </Grid>

          <Grid
            md={6}
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "end",
              alignItems: "center",
              paddingLeft: "32px",
            }}
          >
            <Link href="/">نمایش همه</Link>
          </Grid>

          {/* Example article cards */}
          <Grid item xs={12} sm={6} md={3}>
            <ArticleCard
              title="راهنمای دریافت معرفی‌نامه"
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  "
              imageUrl="/assets/images/articles/1.webp"
              altText="مقاله"
              date="5 دقیقه"
              readMoreUrl="/articles/1"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ArticleCard
              title="راهنمای دریافت معرفی‌نامه"
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  "
              imageUrl="/assets/images/articles/2.webp"
              altText="مقاله"
              date="5 دقیقه"
              readMoreUrl="/articles/2"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ArticleCard
              title="راهنمای دریافت معرفی‌نامه"
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  "
              imageUrl="/assets/images/articles/3.webp"
              altText="مقاله"
              date="5 دقیقه"
              readMoreUrl="/articles/3"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ArticleCard
              title="راهنمای دریافت معرفی‌نامه"
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.  "
              imageUrl="/assets/images/articles/4.webp"
              altText="مقاله"
              date="5 دقیقه"
              readMoreUrl="/articles/4"
            />
          </Grid>
          <Grid
            xs={12}
            mt={4}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained">بیشتر</Button>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
export default Home;