import './index.scss'

export default function AnimatedLetters({ letterClass, strArray, idx }) {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + 1} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}