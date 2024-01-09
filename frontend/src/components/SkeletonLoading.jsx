import React from 'react'
import { Skeleton } from '@mui/material'
import { v4 } from "uuid";
const SkeletonLoading = ({display = 'view'}) => {
    const skeletonLoadingView = Array.from({ length: 20 }, () => {
        return (
          <div key={v4()} className="div">
            <Skeleton key={v4()} animation='wave' variant='rectangular' width={300} height={200} />
            <div className="infoLoad mt-2 flex justify-between">
            <Skeleton key={v4()} animation='wave' variant='text' width={100} />
            <Skeleton key={v4()} animation='wave' variant='text' width={70} />
            </div>
          </div>
        )
    })
          const skeletonLoadingList = Array.from({ length: 10 }, (_, index) => {
        return (
          <div key={v4()} className="div flex flex-col w-fit gap-2">
            <Skeleton key={v4()} animation='wave' variant='rectangular' width={'100%'} height={250} />
            <div className="infoLoad mt-2 flex flex-col justify-between">
            <Skeleton key={v4()} animation='wave' variant='text' width={120} />
            <Skeleton key={v4()} animation='wave' variant='text' width={80} />
            <Skeleton key={v4()} animation='wave' variant='text' height={80} width={350} />
            <Skeleton key={v4()} animation='wave' variant='text' height={50} width={100} />
            </div>
          </div>
        )
      })
    if (display === 'view') {
        return skeletonLoadingView
    } else {
        return skeletonLoadingList
    }
}

export default SkeletonLoading