import React, { CSSProperties, useState, useEffect, useMemo } from 'react';
import { Loader2 } from 'lucide-react';
import get_image_url from '../../src/tools/tools';

interface EditableImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    propKey: string;             // 必须传入的唯一标识符
    keywords?: string;           // 用于关键词获取图片
    description?: string;        // 图片详细描述
    needLargeImage?: boolean;    // 是否需要大图
    orientation?: 'landscape' | 'portrait' | 'square'; // 图片方向
}

const defaultStyle: CSSProperties = {
    objectFit: 'cover',
};

const extractProjectId = (): string => {
    if (typeof window === 'undefined') {
        return '';
    }
    try {
        const currentUrl = new URL(window.location.href);
        const queryProjectId =
            currentUrl.searchParams.get('PROJECTID') ||
            currentUrl.searchParams.get('project_id') ||
            currentUrl.searchParams.get('projectId');
        if (queryProjectId) {
            return decodeURIComponent(queryProjectId);
        }
        const pathMatch = currentUrl.pathname.match(/PROJ_[0-9a-zA-Z]+/);
        return pathMatch ? pathMatch[0] : '';
    } catch {
        return '';
    }
};

// 检测字符串是否为有效的网址
const isValidUrl = (string: string): boolean => {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:' || url.protocol === 'blob:';
    } catch (_) {
        return false;
    }
};

const EditableImg = ({ 
    src, 
    alt = '', 
    className, 
    propKey, 
    style,
    keywords,
    description,
    needLargeImage=false,
    orientation = 'landscape',
    ...imgProps
}: EditableImgProps) => {
    const [imageSrc, setImageSrc] = useState<string | undefined>(src);
    const [imageAlt, setImageAlt] = useState<string | undefined>(alt);
    const [loading, setLoading] = useState<boolean>(false);
    const [isFromKeywordSearch, setIsFromKeywordSearch] = useState<boolean>(false); // 新增状态
    const projectId = useMemo(() => extractProjectId(), []);

    useEffect(() => {
        setImageSrc(src);
        setIsFromKeywordSearch(false); // 来自 src prop 时,标记为非关键词搜索
    }, [src]);

    useEffect(() => {
        setImageAlt(alt);
    }, [alt]);

    // 新增：根据 keywords 获取图片
    useEffect(() => {
        if (!src && keywords) {
            // 检查 keywords 是否为有效的网址
            if (isValidUrl(keywords)) {
                // 如果是网址，直接使用
                setImageSrc(keywords);
            } else {
                // 如果不是网址，调用 get_image_url 函数
                setLoading(true);
                get_image_url(keywords, orientation, propKey, projectId || '', description || '', needLargeImage).then(url => {
                    setImageSrc(url);
                    setLoading(false);
                    setIsFromKeywordSearch(true); // 标记为关键词搜索
                }).catch(() => {
                    setLoading(false);
                });
            }
        }
    }, [keywords, src, orientation, propKey, projectId, description, needLargeImage]);

    const sizeStyle: CSSProperties = className ? {} : { width: '100%', height: '100%' };
    const mergedStyle: CSSProperties = {
        ...sizeStyle,
        ...defaultStyle,
        ...style,
    };

    if (loading) {
        return (
            <div style={{...mergedStyle, display: 'flex', alignItems: 'center', justifyContent: 'center'}} key={propKey} className={className}>
                <Loader2 className="animate-spin" />
            </div>
        );
    }

    return (
        <img
            {...imgProps}
            style={mergedStyle}
            key={propKey}
            src={imageSrc}
            alt={imageAlt}
            className={className}
            data-api-exclude-tracking={isFromKeywordSearch ? "true" : undefined}
        />
    );
};

export default EditableImg;
