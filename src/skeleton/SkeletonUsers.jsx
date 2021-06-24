import React from 'react';
import SkeletonElement from './SkeletonElement';
import './Skeleton.css'
import Shimmer from './Shimmer';

function SkeletonUsers({ theme }) {

    const classTheme = theme || 'light'

    return (
        <div className={`skeleton-wrapper ${classTheme}`}>
            <div className="skeleton-users">
                <div>
                    <SkeletonElement type="avatar" />
                </div>
                <div>
                    <SkeletonElement type="title" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                </div>
            </div>
            <Shimmer />
        </div>
    );
}

export default SkeletonUsers;