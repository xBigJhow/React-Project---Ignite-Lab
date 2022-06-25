import { CheckCircle } from 'phosphor-react'
import { Lock } from 'phosphor-react'
import { isPast, format} from 'date-fns' /* SABER SE A DATA JÁ PASSOU */
import pt_BR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'



interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const { slug } = useParams<{slug: string;}>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • ' K'h'mm", {
        locale: pt_BR
    })

    const isActiveLesson = slug == props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span> 
            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                'bg-green-500': isActiveLesson,
            })}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ?(
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20}/>
                        Conteúdo Liberado
                    </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20} />
                        Em Breve
                    </span>
                    )}
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={classNames('text-gray-200 mt-5 block'),{'text-zinc-100'}}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}