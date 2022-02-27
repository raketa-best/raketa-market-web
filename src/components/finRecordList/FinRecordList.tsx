import { FinRecord, IFinRecordProps } from "./FinRecord"
import classes from '../ProfileBodyBg.module.css'

export interface IFinRecordListProps {
    finRecordList?: IFinRecordProps[]    
}

const FinRecordList: React.FC<IFinRecordListProps> = ({finRecordList}: IFinRecordListProps) => {
    return <div className={classes.block}>
        { finRecordList &&
            finRecordList.map((item: IFinRecordProps, index: number) =>         
                <FinRecord {...item} key={index} />
            )
        }
    </div>
}

export default FinRecordList