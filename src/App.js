import './styles/App.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import Home, {dataLoader as homeDataLoader} from "./pages/Home";
import AuthorQuotes, {dataLoader as authorQuotesDataLoader} from "./pages/AuthorQuotes";

export default function App() {
    let router = createHashRouter([
        {
            path: '/*',
            children: [
                {
                    path: '',
                    loader: homeDataLoader,
                    element: <Home/>,
                },
                {
                    path: "author/:author",
                    loader: authorQuotesDataLoader,
                    element: <AuthorQuotes/>,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>;
}
