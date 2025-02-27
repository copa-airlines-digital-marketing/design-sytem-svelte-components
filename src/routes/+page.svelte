<script lang="ts">
	import { Button } from '$lib/components/button/index.js';
	import { Divider } from '$lib/components/divider/index.js';
	import { Container } from '$lib/components/grid/index.js';
	import { Pill } from '$lib/components/pill/index.js';
	import { Heading, Caption, Body, Overline, Link } from '$lib/components/typography/index.js';
	import { Checkbox } from '$lib/components/checkbox/index.js';
</script>

<Container class="py-roomy bg-backgound-paper" type="grid">
	<Heading tag="h1" variant="h1">Copa Airlines Components</Heading>
	<Caption>Some descripiton</Caption>
	<Divider />
	<Heading>Components</Heading>
	<Heading tag="h3" variant="h3">Container</Heading>
	<Container class="bg-system-error-faded h-28 rounded-3xl" />
	<Container layout let:Item class="py-roomy bg-system-warning-faded">
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
	<Pill let:Text class="bg-system-success">
		<Text>On time</Text>
	</Pill>
	<div>
		<label for="yolo" class="flex items-center gap-2">
			<Checkbox id="yolo" />
			Hello world
		</label>
	</div>
</Container>
