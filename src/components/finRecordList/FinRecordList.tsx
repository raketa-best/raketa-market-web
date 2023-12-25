import { FinRecord, IFinRecordProps } from "./FinRecord"
import { useState } from "react"

const fakeStateFinRecords = [
    {
      stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142180-55822f89-65ed-4813-992f-b078b60573fe.png",
      name: 'NVIDIA',
      bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142437-c26d9d99-c9da-4ab8-a18f-33959f7d10c7.png",
      profit: 5000000,
      profitPercent: 155,
      comment: "EXCELLENT!!!!"
    },
    {
      stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142477-155aa3cc-719d-4bc9-aa0c-29479cb11109.png",
      name: 'APPLE-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
      bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142523-763c5f59-73d7-421b-81a4-f74f915452dc.png",
      profit: 150555555555555555555555555555555555555555555555555555550000,
      profitPercent: 4444444444444444444444444444444444444444444444444444444444444444,
      comment: "REALLYuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu 🤔"
    },
    {
    stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142180-55822f89-65ed-4813-992f-b078b60573fe.png",
    name: 'NVIDIA',
    bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142437-c26d9d99-c9da-4ab8-a18f-33959f7d10c7.png",
    profit: 5000000,
    profitPercent: 155,
    comment: "EXCELLENT!!!!"
    },
    {
    stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142477-155aa3cc-719d-4bc9-aa0c-29479cb11109.png",
    name: 'APPLE-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
    bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142523-763c5f59-73d7-421b-81a4-f74f915452dc.png",
    profit: 150555555555555555555555555555555555555555555555555555550000,
    profitPercent: 4444444444444444444444444444444444444444444444444444444444444444,
    comment: "GOODuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu 🤔"
    },
    {
    stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142180-55822f89-65ed-4813-992f-b078b60573fe.png",
    name: 'NVIDIA',
    bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142437-c26d9d99-c9da-4ab8-a18f-33959f7d10c7.png",
    profit: 5000000,
    profitPercent: 155,
    comment: "EXCELLENT!!!!"
    },
    {
    stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142477-155aa3cc-719d-4bc9-aa0c-29479cb11109.png",
    name: 'APPLE-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
    bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142523-763c5f59-73d7-421b-81a4-f74f915452dc.png",
    profit: 150555555555555555555555555555555555555555555555555555550000,
    profitPercent: 4444444444444444444444444444444444444444444444444444444444444444,
    comment: "REALLYuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu 🤔"
    },
    {
    stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142180-55822f89-65ed-4813-992f-b078b60573fe.png",
    name: 'NVIDIA',
    bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142437-c26d9d99-c9da-4ab8-a18f-33959f7d10c7.png",
    profit: 5000000,
    profitPercent: 155,
    comment: "EXCELLENT!!!!"
    },
    {
    stockImageUrl: "https://user-images.githubusercontent.com/13190019/155142477-155aa3cc-719d-4bc9-aa0c-29479cb11109.png",
    name: 'APPLE-rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
    bgImageUrl: "https://user-images.githubusercontent.com/13190019/155142523-763c5f59-73d7-421b-81a4-f74f915452dc.png",
    profit: 150555555555555555555555555555555555555555555555555555550000,
    profitPercent: 4444444444444444444444444444444444444444444444444444444444444444,
    comment: "GOODuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu 🤔"
    }
]
    
const FinRecordList: React.FC = () => {

    const [finRecordList] = useState<IFinRecordProps[]>(fakeStateFinRecords)
    
    return <>
            { finRecordList &&
            finRecordList.map((item: IFinRecordProps, index: number) =>         
                <FinRecord {...item} key={index} />
            )
        }
    </>
}

export default FinRecordList