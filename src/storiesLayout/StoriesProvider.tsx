import React, { createContext, useState } from 'react'
import StoriesLayout from './StoriesLayout'


interface IStoriesProviderProps {
    children: any
}


export const StoriesContext: React.Context<any>  = createContext(null)


const StoriesProvider: React.FC<IStoriesProviderProps> = (props: IStoriesProviderProps) => {

    const [ arrayStories, setArrayStories] = useState([])
    const [showStories, setShowStories] = useState(null)

          
    return <StoriesContext.Provider value={ {setShowStories, setArrayStories, arrayStories} }>
        { showStories === null
            ? props.children
            : <StoriesLayout>{ {showStories} }</StoriesLayout>
        }
    </StoriesContext.Provider>
}

export default StoriesProvider