import { ComponentDoc } from "react-docgen-typescript";
export interface GeneratorOptions {
    filename: string;
    source: string;
    componentDocs: ComponentDoc[];
    docgenCollectionName: string | null;
    setDisplayName: boolean;
    typePropName: string;
}
export default function generateDocgenCodeBlock(options: GeneratorOptions): string;
