import MainRoute from "@/routes/MainRoute";
import {Toaster} from "@/components/ui/toaster";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header.tsx";

function App() {

    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>
            <MainRoute/>
            <Toaster/>
            <div className={'w-full flex flex-col justify-center items-center bg-black'}>
                <Footer/>
            </div>
        </>
    )
}

export default App
