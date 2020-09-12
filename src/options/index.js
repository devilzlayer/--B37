/*
*
* CUSTOM TRANSLATION WORD BY WORD
*
*/
import React from 'react'
import { map , find , isArray , isMatch ,capitalize , startCase , toLower , includes} from 'lodash'
import LANGUAGES from './lang'

const LANG = localStorage.getItem('lang')

const DEFAULT = 'zh';



const REGHTML = (props ) =>{
    const { intent , value , html , children } =props
    let lang = DEFAULT
    if(LANG){
        lang = LANG
    }
     
    if( DEFAULT === LANG ){
        return children
    }

    if(isArray(intent)){
        const NewHtml =  React.createElement(html, null , value)
        let newIndex 
        map( LANGUAGES , (obj )=>{ 
            const wordIndex = find(obj , ob => {
                if(isMatch( ob.word , intent )  ){
                    return obj
                }
            })
            if(wordIndex){
                newIndex = obj
            }

        })
        const newWord = find(newIndex , obj => obj.lang == toLower(lang) )
        if(newWord){
            return  <> {NewHtml} {startCase(newWord.word)}  </>
        }
        return children
       
    }

}

const TRANSLATE = (event ) =>{
    let lang = DEFAULT
    if(LANG){
        lang = LANG
    }

    let newIndex 
    map( LANGUAGES , (obj )=>{ 
        const wordIndex = find(obj , ob => {
            if(ob.word === event){
                return obj
            }
            if(isArray(ob.word)){
                if(includes(ob.word ,event )){
                    return obj
                }
            }
        })
        if(wordIndex){
            newIndex = obj
        }
    })
    const newWord = find(newIndex , obj => obj.lang == toLower(lang) )
    if(newWord){
        return startCase(newWord.word)
    }
    return event

}


export {
    REGHTML,
    TRANSLATE,
}