import {  useState,useEffect } from 'react'

import data from "./data/truthanddare.json"
import styles from './Play.module.css'

export default function Play(){
    let [truthTranslate, setTruthTranslate] = useState('-50%')
    let [dareTranslate, setDareTranslate] = useState('-50%')
    let [truthText, setTruthText] = useState("")
    let [truthAuthor, setTruthAuthor] = useState("")
    let [dareText, setDareText] = useState("")
    let [dareAuthor, setDareAuthor] = useState("")
    let [opacity, setOpacity] = useState(0)

    useEffect(()=>{
        randomText("truth")
        randomText("dare")
    },[])

    let truthStyle = {
        transform: `translateY(${truthTranslate})`
    }
    let dareStyle = {
        transform: `translateY(${dareTranslate})`
    }
    let contentStyle = {
        opacity : opacity
    }

    let handleTruthOpen = () => {
        setTruthTranslate("0%")
        setDareTranslate("0%")
        setOpacity(1)
    }
    let handleDareOpen = () => {
        setTruthTranslate("-100%")
        setDareTranslate("-100%")
        setOpacity(1)
    }

    let handleClose = (e,mod) => {
        e.stopPropagation()
        setTruthTranslate("-50%")
        setDareTranslate("-50%")
        setOpacity(0)
        if (mod === 1){
            randomText("truth")
        }else{
            randomText("dare")
        }
    }
    
    const randomText = (mode) => {
        let list = data[mode]
        let index = Math.floor(Math.random() * list.length)

        if (mode === "truth"){
            setTimeout(()=>{
                setTruthText(list[index].text)
                setTruthAuthor(list[index].author)
            },1200)
            
        }else{
            setTimeout(()=>{
                setDareText(list[index].text)
                setDareAuthor(list[index].author)
            },1200)
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.truthContainer} onClick={handleTruthOpen} style={truthStyle}>
                <span className={styles.headerTruth}>Truth</span>
                <div className={styles.content}>
                    <p className={styles.text} style={contentStyle}>{truthText}</p>
                    <p className={styles.author} style={contentStyle}>- {dareAuthor} -</p>
                    <p className={styles.close} style={contentStyle} onClick={(e)=>handleClose(e,1)}>klik disini untuk menutup</p>
                </div>
            </div>
            <div className={styles.dareContainer} style={dareStyle} onClick={handleDareOpen}>
                <span className={styles.headerDare}>Dare</span>
                <div className={styles.content}>
                    <p className={styles.text} style={contentStyle}>{dareText}</p>
                    <p className={styles.author} style={contentStyle}>- {dareAuthor} -</p>
                    <p className={styles.close} style={contentStyle} onClick={(e)=>handleClose(e,0)}>klik disini untuk menutup</p>
                </div>
            </div>
        </div>
    )
}