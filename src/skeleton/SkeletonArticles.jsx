import React from 'react';
import SkeletonElement from './SkeletonElement';
import './Skeleton.css'
import Shimmer from './Shimmer';

function SkeletonArticles({ theme }) {

    const classTheme = theme || 'light'

    return (
        <div className={`skeleton-wrapper ${classTheme}`}>
            <div className="skeleton-articles">
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer />
        </div>
    );
}

export default SkeletonArticles;