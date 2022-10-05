interface IContextProps {
    children?: React.ReactNode;
}

interface IContext {
    images: string[];
    changeImages: () => void;
    setImages?: () => {};
    isChanged?: boolean;
    setIsChanged?: (isChanged: boolean) => void;
}

export type { IContextProps, IContext };