import Post from "../components/Post";
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){
    const cheeses = useLoaderData()
    return <>
    <div style={{textAlign: "center"}}>
        <h1>Add Cheese</h1>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="origin_country" placeholder="Origin Country"/>
            <input type="text" name="type" placeholder="Type"/>
            <button>Add a new Cheese</button>
        </Form>
    </div>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
    </>
}

export default Index;