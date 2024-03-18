import React from "react"


interface Block {
    tagName: string,
    className: string
    content?: React.ReactNode | React.ReactNode[],
    child?: Block[]
}

const block_test : Block = {
    tagName: "section",
    className: "flex",

}

const blocks_test: Block[] = [
    {
        tagName: "section",
        className: "flex",
        child: [
            {
                 tagName: "div",
                 className: "flex"
            }
        ]
    }
]

const createElement = (block: Block) => {
 
}

export const RenderingEngine = () => {
    let elements: React.ReactNode = []

    const render = (blocks: Block[]) => {
        for(let i = 0; i < blocks.length; i++){
            if("child" in blocks[i] && Array.isArray(blocks[i].child)){
                render(blocks[i].child as Block[])
            }else{
                // elements.push(blocks[i])
            }
        }
    }

    return <>{elements}</>
}