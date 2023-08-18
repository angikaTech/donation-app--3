import Header from '@/copmonent/user/header'
import Sidebar from '@/copmonent/user/sidebar'
import Footer from '@/copmonent/user/footer'
import React from 'react';
import html2canvas from 'html2canvas'
import RecieptImage from '@/copmonent/user/reciept-image';




export default function Print() {



    const printRef = React.useRef();

    const handleDownloadImage = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'image.jpg';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };


    return (
        <>
            <main>


                <div className="container-scroller">
                    <Header />
                    <div className="container-fluid page-body-wrapper">
                        {/* <Skin />
                        <Rightsidbar /> */}
                        <Sidebar />
                        <div class="main-panel">
                            <button className="btn btn-primary mr-2" type="button" onClick={handleDownloadImage}>
                                Download as Image
                            </button>


                            <div>
                                <div ref={printRef}><RecieptImage /></div>
                            </div>


                            <Footer />


                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}