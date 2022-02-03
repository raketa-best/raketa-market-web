import React, { createContext, useState } from 'react'
import StoriesLayout from './StoriesLayout'


interface IStoriesProviderProps {
    children: any
}


export const StoriesContext: React.Context<any>  = createContext(null)


const StoriesProvider: React.FC<IStoriesProviderProps> = (props: IStoriesProviderProps) => {

    const [arrayStories, setArrayStories] = useState<any>([])
    const [showStories, setShowStories] = useState(null)

    const show = (stories: any) => {
        setShowStories(stories)
        setArrayStories([...arrayStories, stories])
    } 

    const exit = () => {
        show(null)
        setArrayStories([])
    }

    const back = () => {
        show(arrayStories[arrayStories.length - 2])
        setArrayStories(arrayStories.slice(0, -1))
    }
              
    return <StoriesContext.Provider value={ {show, exit, back, arrayStories} }>
        { showStories === null
            ? props.children
            : <StoriesLayout>{ showStories }</StoriesLayout>
        }
    </StoriesContext.Provider>
}

export default StoriesProvider