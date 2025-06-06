interface CardRecursosProps{
        titulo: string,
        subtitulo: string,
        iconeSRC: string
}
export default function CardRecursos({titulo,subtitulo,iconeSRC}: CardRecursosProps) {

    return (
       <div className="
        bg-blue-200
        p-6 rounded-xl no
        hover:shadow-md transition duration-300"
        >
            <div className="text-4xl mb-4">{iconeSRC}</div>
            <h3 className="
            text-xl font-semibold text-gray-800 mb-2">
                {titulo}
            </h3>
            <p className="text-gray-600">{subtitulo}</p>

        </div>


    )
}