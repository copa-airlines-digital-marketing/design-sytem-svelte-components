<script lang="ts">
	import { Button } from '../lib/components/button/index.js';
	import { Divider } from '../lib/components/divider/index.js';
	import { Container, ContainerItem as Item } from '../lib/components/grid/index.js';
	import { Pill, Text } from '../lib/components/pill/index.js';
	import { Heading, Caption, Body, Overline, Link } from '../lib/components/typography/index.js';
	import { Checkbox } from '../lib/components/checkbox/index.js';
	import {
		Avatar,
		Image as AvatarImage,
		Fallback as AvatarFallback
	} from '../lib/components/avatar/index.js';
	import {
		AccordionRoot,
		AccordionItem,
		AccordionHeader,
		AccordionContent,
		AccordionTrigger,
		AccordionTitle,
		AccordionIcon
	} from '../lib/components/input-dropdowns/accordion/index.js';
	import { Source as PictureSource } from '../lib/components/picture/index.js';
	import {
		InformativeBoxContainer,
		InformativeBox,
		InformativeBoxIcon,
		InformativeBoxTitle,
		InformativeBoxDescription
	} from '../lib/components/boxes/informative/index.js';
	import { Globe, Phone, Carrot, Check, Close } from '../lib/components/icon/index.js';
	import { AnunciosImportantes, CheckIn, Conexion } from '../lib/components/pictograms/index.js';
</script>

<Container class="py-roomy bg-background-paper" type="grid">
	<Heading tag="h1" variant="h1">Copa Airlines Components</Heading>
	<Caption>Some descripiton</Caption>
	<Divider />
	<Heading>Components</Heading>
	<Heading tag="h3" variant="h3">Container</Heading>
	<Container class="bg-system-error-faded h-28 rounded-3xl" />
	<Container layout class="py-roomy bg-system-warning-faded">
		<Item distribution="third" class="bg-primary h-28"></Item>
		<Item distribution="half" class="bg-primary h-28"></Item>
		<Item distribution="third" class="bg-primary h-28"></Item>
	</Container>
	<Heading tag="h3" variant="h3">Typography</Heading>
	<Heading tag="h4" variant="h1">Heading</Heading>
	<Caption>Caption</Caption>
	<Overline>Overline</Overline>
	<Body>Body</Body>
	<Link href="#">Body</Link>
	<Heading tag="h3" variant="h3">Button</Heading>
	<Button>I'm a button</Button>
	<Heading tag="h3" variant="h3">Divider</Heading>
	<Divider />
	<Heading tag="h3" variant="h3">Pill</Heading>
	<Pill class="bg-system-success">
		<Text>On time</Text>
	</Pill>
	<Heading tag="h3" variant="h3">Avatar</Heading>
	<Avatar size="normal">
		<AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Demo" alt="Avatar" />
		<AvatarFallback>AB</AvatarFallback>
	</Avatar>
	<Heading tag="h3" variant="h3">Accordion</Heading>
	<AccordionRoot>
		<AccordionItem value="a">
			<AccordionHeader>
				<AccordionTrigger>
					<AccordionTitle>Item A</AccordionTitle>
					<AccordionIcon />
				</AccordionTrigger>
			</AccordionHeader>
			<AccordionContent>Content A</AccordionContent>
		</AccordionItem>
		<AccordionItem value="b">
			<AccordionHeader>
				<AccordionTrigger>
					<AccordionTitle>Item B</AccordionTitle>
					<AccordionIcon />
				</AccordionTrigger>
			</AccordionHeader>
			<AccordionContent>Content B</AccordionContent>
		</AccordionItem>
	</AccordionRoot>
	<Heading tag="h3" variant="h3">Picture</Heading>
	<picture>
		<PictureSource screen="md" srcset="https://placehold.co/800x400 800w" />
		<img src="https://placehold.co/400x200" alt="Sample" />
	</picture>
	<Heading tag="h3" variant="h3">Informative box</Heading>
	<InformativeBoxContainer>
		<InformativeBox alignment="left" orientation="vertical">
			<InformativeBoxIcon size="normal" />
			<InformativeBoxTitle>Title</InformativeBoxTitle>
			<InformativeBoxDescription
				>Description text for the informative box.</InformativeBoxDescription
			>
		</InformativeBox>
	</InformativeBoxContainer>
	<Heading tag="h3" variant="h3">Icons</Heading>
	<div class="flex gap-4 items-center flex-wrap">
		<Globe />
		<Phone />
		<Carrot direction="down" />
		<Check />
		<Close />
	</div>
	<Heading tag="h3" variant="h3">Pictograms</Heading>
	<div class="flex gap-4 items-center flex-wrap">
		<AnunciosImportantes />
		<CheckIn />
		<Conexion />
	</div>
	<Heading tag="h3" variant="h3">Checkbox</Heading>
	<div>
		<label for="yolo" class="flex items-center gap-2">
			<Checkbox id="yolo" />
			Hello world
		</label>
	</div>
</Container>
