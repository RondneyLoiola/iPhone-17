import { useState } from "react";

function Colors() {
    const colors = [
        { id: 'blue', name: 'Titânio Azul', image: '/src/assets/iphone-blue.png', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titânio Natural', image: '/src/assets/iphone-silver.png', colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Titânio Laranja', image: '/src/assets/iphone-orange.png', colorClass: 'bg-orange-500' }
    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de vídeo', weight: '199g' }
    ];

    const [selectedColor, setSelectedColor] = useState('blue');


    return (
        <section className="bg-black py-20 px-8" id="cores">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4">Escolha sua Cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio lindos!</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex items-center justify-center min-h-[500px]">
                            <img className="max-w-full max-h-[600px] mx-auto" src={colors.find(color => color.id === selectedColor).image} alt="iphone 17" />
                        </div>

                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className="text-2xl font-semibold">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    {colors.map(color => (
                        <button key={color.id} onClick={() => setSelectedColor(color.id)} className={`relative transition-all duration-300 cursor-pointer`}>
                            <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedColor === color.id ? 'border-white' : 'border-gray-600'}`}>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 mt-20 grid-cols-2">
                    {models.map((models, index) => (
                        <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-2xl font-bold mb-3">{models.name}</h3>
                            <p className="text-gray-400 mb-4">{models.screen}</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>{models.storage}</li>
                                <li>{models.battery}</li>
                                <li>{models.weight}</li>
                            </ul>
                        </div>
                    )) }
                </div>

                <div className="text-center mt-16">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">
                        Compre agora a partir de R$ 9.950,00
                    </button>
                    <p>Ou em até 12x de R$ 829,17 sem juros</p>
                </div>

            </div>
        </section>
    )
}

export default Colors