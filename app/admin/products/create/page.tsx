import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const createProductAction = async (formData: FormData) => {
  "use server";

  const name = formData.get("name") as string;

  console.log(name);
};

function CreateProductPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">
        Create Product
      </h1>

      <div className="rounded-md border p-8">
        <form action={createProductAction}>
          <div className="mb-2">
            <Label htmlFor="name">Product Name</Label>

            <Input  
              id="name"
              name="name"
              type="text"
            />
          </div>

          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CreateProductPage;