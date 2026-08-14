function AboutPage() {
    return (
        <section className="flex flex-col gap-5">
            <h1 className="sm:text-6xl text-4xl font-bold gap-2 sm:gap-x-6 flex flex-col sm:flex-row items-center justify-center">we love 
                <span className="py-2 px-4 bg-primary rounded-lg tracking-widest text-white">store</span>
            </h1>
            <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
                distinctio ducimus temporibus nobis autem laboriosam repellat, magni
                fugiat minima excepturi neque, tenetur possimus nihil atque! Culpa nulla
                labore nam?
            </p>
        </section>
    )
}

export default AboutPage;