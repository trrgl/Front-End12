import Header from './components/Header'

export default function Chall1() {
    return (
        <div className='bg-black text-white min-h-screen'>
            <Header/>
            <div className='h-20'></div>
            <div className='px-20 space-y-4'>
                <h1 className='text-xl'><span className='text-4xl font-bold'>7 Seconds to glory </span> by: fg0x0</h1>
                <h1>1. Өгөгдсөн 'bomb' ELF file-ийг compiler-аар задална.</h1>
                <img src='/7secondstoglory/img1.png'/>
                <h1>2. Олсон function нь byte_4A1100 дээр байгаа дата-г 0x25-аар XOR-дож байгаа буцаан XOR-доод гарсан утгын програмлуугаа оруулна.</h1>
                <img src='/7secondstoglory/img2.png'/>
                <img src='/7secondstoglory/img3.png'/>
                <img src='/7secondstoglory/img4.png'/>
                <img src='/7secondstoglory/img5.png'/>
                <p>Flag : {"HZU18{th3_bOmb_h@$_b33n_DefUs3d}"}</p>
            </div>
            <div className='h-20'></div>
        </div>
    );
}