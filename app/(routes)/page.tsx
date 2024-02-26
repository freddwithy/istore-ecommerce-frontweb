import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/cointainer";

export const revalidate = 0;

const HomePage = async () => {
    const product = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("5b076045-9cc0-43b5-98cf-4e69d84c0494");
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Productos Destacados" items={product} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;