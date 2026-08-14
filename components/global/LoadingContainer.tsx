import  Skeleton from '@/components/ui/Skeleton'
function LoadingContainer() {
    return (
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <LoadingProduct />
        </div>
    );
}

function LoadingProduct() {
    return (
        <div className="bg-card rounded-md shadow-md p-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4 mt-4" />
            <Skeleton className="h-4 w-1/4 mt-4" />
        </div>
    )
}

export default LoadingContainer;
