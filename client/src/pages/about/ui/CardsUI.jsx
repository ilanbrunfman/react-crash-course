import Card from "@/components/card/Card"
import CardHeader from "@/components/card/CardHeader"
import CardBody from "@/components/card/CardBody"
import CardFooter from "@/components/card/CardFooter"
import Button from "@/components/button/Button"

const CardsUI = () => {
    return(
        <section>
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-2">Cards UI</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-grid grid-3 gap-2">
                    <Card variant="elevated" interactive>
                        <CardHeader
                            thumbnail="thumbnail 1"
                            // title="Daily Stats"
                            // subtitle="Overview of today"
                            // action={<button>⋯</button>}
                        />
                        <CardBody>
                            <p>Content goes here.</p>
                        </CardBody>
                        {/* <CardFooter>
                            <Button >View More</Button>
                        </CardFooter> */}
                    </Card>
                    <Card variant="elevated" interactive>
                        <CardHeader
                            thumbnail="thumbnail 2"
                        />
                        <CardBody>
                            <p>Content goes here.</p>
                        </CardBody>
                    </Card>
                    <Card variant="elevated" interactive>
                        <CardHeader
                            thumbnail="thumbnail 3"
                        />
                        <CardBody>
                            <p>Content goes here.</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default CardsUI