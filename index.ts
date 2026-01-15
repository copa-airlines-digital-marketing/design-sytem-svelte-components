import { cn, tm, tv, flyAndScale, styleToString } from './src/lib/index.js';
import { Button } from './src/lib/components/primitives/button/index.js';
import { Checkbox } from './src/lib/components/primitives/checkbox/index.js';
import { Divider } from './src/lib/components/layout/divider/index.js';
import { Container, ContainerItem } from './src/lib/components/layout/grid/index.js';
import { Pill, PillText, PillIcon } from './src/lib/components/data-display/pill/index.js';
import {
	Heading,
	Body,
	Caption,
	Overline,
	Link,
	getTypography,
	getTypographySize,
	getTypographyVariant
} from './src/lib/components/data-display/typography/index.js';
import {
	Container as InformativeBoxContainer,
	Box as InformativeBox,
	Icon as InformativeBoxIcon,
	Image as InformativeBoxImage,
	Title as InformativeBoxTitle,
	Description as InformativeBoxDescription
} from './src/lib/components/data-display/boxes/informative/index.js';
import { Avatar, Image as AvatarImage, Fallback as AvatarFallback } from './src/lib/components/data-display/avatar/index.js';
import {
	AccordionRoot,
	AccordionItem,
	AccordionHeader,
	AccordionContent,
	AccordionTrigger,
	AccordionIcon,
	AccordionTitle,
	AccordionLabel,
	AccordionCTA
} from './src/lib/components/forms/input-dropdowns/accordion/index.js';
import {
	iconWithDirectionVariants,
	NoIcon,
	Carrot,
	Globe,
	Phone,
	Filled,
	Regular,
	Social
} from './src/lib/components/media/icon/index.js';
import { pictogramVariants, AnunciosImportantes, CheckIn, Tiquetes } from './src/lib/components/media/pictograms/index.js';
import { PictureSource, Source } from './src/lib/components/media/picture/index.js';

// Utilidades
export { cn, tm, tm as tailwindMerge, tv, tv as tailwindVariants, flyAndScale, styleToString };

// Componentes
export {
	Button,
	// avatar
	Avatar,
	AvatarImage,
	AvatarFallback,
	// form & feedback
	Checkbox,
	Divider,
	// layout
	Container,
	ContainerItem,
	// pill
	Pill,
	PillText,
	PillIcon,
	// typography
	Heading,
	Body,
	Caption,
	Overline,
	Link,
	getTypography,
	getTypographySize,
	getTypographyVariant,
	// informative box
	InformativeBoxContainer,
	InformativeBox,
	InformativeBoxIcon,
	InformativeBoxImage,
	InformativeBoxTitle,
	InformativeBoxDescription,
	// accordion
	AccordionRoot,
	AccordionItem,
	AccordionHeader,
	AccordionContent,
	AccordionTrigger,
	AccordionIcon,
	AccordionTitle,
	AccordionLabel,
	AccordionCTA,
	// icon
	iconWithDirectionVariants,
	NoIcon,
	Carrot,
	Globe,
	Phone,
	Filled,
	Regular,
	Social,
	// pictograms
	pictogramVariants,
	AnunciosImportantes,
	CheckIn,
	Tiquetes,
	// picture
	PictureSource,
	Source
};