<script lang="ts">
	import type { Component } from 'svelte';
	import AddFalse from '../lib/components/icon/copa/add-false.svelte';
	import AddFilled from '../lib/components/icon/copa/add-filled.svelte';
	import AirlineApp from '../lib/components/icon/copa/airline-app.svelte';
	import AlarmDefault from '../lib/components/icon/copa/alarm-default.svelte';
	import AlarmFilled from '../lib/components/icon/copa/alarm-filled.svelte';
	import ArrowDown from '../lib/components/icon/copa/arrow-down.svelte';
	import ArrowLeft from '../lib/components/icon/copa/arrow-left.svelte';
	import ArrowRight from '../lib/components/icon/copa/arrow-right.svelte';
	import ArrowUp from '../lib/components/icon/copa/arrow-up.svelte';
	import Baby from '../lib/components/icon/copa/baby.svelte';
	import Baggage from '../lib/components/icon/copa/baggage.svelte';
	import BagsBackpack from '../lib/components/icon/copa/bags-backpack.svelte';
	import BagsCarryOn from '../lib/components/icon/copa/bags-carry-on.svelte';
	import BagsLuggageFalse from '../lib/components/icon/copa/bags-luggage-false.svelte';
	import BagsLuggageFilled from '../lib/components/icon/copa/bags-luggage-filled.svelte';
	import BagsNoBag from '../lib/components/icon/copa/bags-no-bag.svelte';
	import BagsSuitecase from '../lib/components/icon/copa/bags-suitecase.svelte';
	import BanksCreditCard from '../lib/components/icon/copa/banks-credit-card.svelte';
	import CalendarFalse from '../lib/components/icon/copa/calendar-false.svelte';
	import CalendarFilled from '../lib/components/icon/copa/calendar-filled.svelte';
	import CancelFalse from '../lib/components/icon/copa/cancel-false.svelte';
	import CancelFilled from '../lib/components/icon/copa/cancel-filled.svelte';
	import Cart from '../lib/components/icon/copa/cart.svelte';
	import Charges from '../lib/components/icon/copa/charges.svelte';
	import CheckCircleFalse from '../lib/components/icon/copa/check-circle-false.svelte';
	import CheckCircleIcon from '../lib/components/icon/copa/check-circle-icon.svelte';
	import City from '../lib/components/icon/copa/city.svelte';
	import Close from '../lib/components/icon/copa/close.svelte';
	import ConnectMiles from '../lib/components/icon/copa/connect-miles.svelte';
	import ConstraintsFalse from '../lib/components/icon/copa/constraints-false.svelte';
	import ConstraintsFilled from '../lib/components/icon/copa/constraints-filled.svelte';
	import CookieFalse from '../lib/components/icon/copa/cookie-false.svelte';
	import CookieFilled from '../lib/components/icon/copa/cookie-filled.svelte';
	import CopyPasteFalse from '../lib/components/icon/copa/copy-paste-false.svelte';
	import CopyPasteFilled from '../lib/components/icon/copa/copy-paste-filled.svelte';
	import Cross from '../lib/components/icon/copa/cross.svelte';
	import CurrencyFalse from '../lib/components/icon/copa/currency-false.svelte';
	import CurrencyFares from '../lib/components/icon/copa/currency-fares.svelte';
	import CurrencyFilled from '../lib/components/icon/copa/currency-filled.svelte';
	import CursorClosedhand1 from '../lib/components/icon/copa/cursor-closedhand-1.svelte';
	import CursorCursor1 from '../lib/components/icon/copa/cursor-cursor-1.svelte';
	import CursorFilterSimple from '../lib/components/icon/copa/cursor-filter-simple.svelte';
	import CursorNotallowed1 from '../lib/components/icon/copa/cursor-notallowed-1.svelte';
	import CursorOpenhand from '../lib/components/icon/copa/cursor-openhand.svelte';
	import CursorPointinghand from '../lib/components/icon/copa/cursor-pointinghand.svelte';
	import CustomerSuportDefault from '../lib/components/icon/copa/customer-suport-default.svelte';
	import CustomerSuportVariant2 from '../lib/components/icon/copa/customer-suport-variant2.svelte';
	import Dot from '../lib/components/icon/copa/dot.svelte';
	import Download from '../lib/components/icon/copa/download.svelte';
	import DrinksFalse from '../lib/components/icon/copa/drinks-false.svelte';
	import DrinksFilled from '../lib/components/icon/copa/drinks-filled.svelte';
	import Edit from '../lib/components/icon/copa/edit.svelte';
	import Ellipsis from '../lib/components/icon/copa/ellipsis.svelte';
	import EmailRead from '../lib/components/icon/copa/email-read.svelte';
	import ErrorFalse from '../lib/components/icon/copa/error-false.svelte';
	import ErrorFilled from '../lib/components/icon/copa/error-filled.svelte';
	import Experience from '../lib/components/icon/copa/experience.svelte';
	import External from '../lib/components/icon/copa/external.svelte';
	import FilterFalse from '../lib/components/icon/copa/filter-false.svelte';
	import FilterFilled from '../lib/components/icon/copa/filter-filled.svelte';
	import Flight from '../lib/components/icon/copa/flight.svelte';
	import FlightArriving from '../lib/components/icon/copa/flight-arriving.svelte';
	import FlightDeparting from '../lib/components/icon/copa/flight-departing.svelte';
	import FlightDisruption from '../lib/components/icon/copa/flight-disruption.svelte';
	import FlightDown from '../lib/components/icon/copa/flight-down.svelte';
	import FlightForwardTilted from '../lib/components/icon/copa/flight-forward-tilted.svelte';
	import FlightLeft from '../lib/components/icon/copa/flight-left.svelte';
	import FlightRight from '../lib/components/icon/copa/flight-right.svelte';
	import FlightUp from '../lib/components/icon/copa/flight-up.svelte';
	import GiftFilled2 from '../lib/components/icon/copa/gift-filled2.svelte';
	import GiftTrue from '../lib/components/icon/copa/gift-true.svelte';
	import Globe from '../lib/components/icon/copa/globe.svelte';
	import HalfStarFalse from '../lib/components/icon/copa/half-star-false.svelte';
	import HalfStarFilled from '../lib/components/icon/copa/half-star-filled.svelte';
	import Hamburger from '../lib/components/icon/copa/hamburger.svelte';
	import HeartFalse from '../lib/components/icon/copa/heart-false.svelte';
	import HeartFilled from '../lib/components/icon/copa/heart-filled.svelte';
	import HelpFalse from '../lib/components/icon/copa/help-false.svelte';
	import HelpFilled from '../lib/components/icon/copa/help-filled.svelte';
	import History from '../lib/components/icon/copa/history.svelte';
	import InfoFalse from '../lib/components/icon/copa/info-false.svelte';
	import InfoFilled from '../lib/components/icon/copa/info-filled.svelte';
	import InfoRounded from '../lib/components/icon/copa/info-rounded.svelte';
	import InfoRoundedFilled from '../lib/components/icon/copa/info-rounded-filled.svelte';
	import ItineraryChange from '../lib/components/icon/copa/itinerary-change.svelte';
	import ItineraryTrue from '../lib/components/icon/copa/itinerary-true.svelte';
	import KeyboardArrowDown from '../lib/components/icon/copa/keyboard-arrow-down.svelte';
	import KeyboardArrowLeft from '../lib/components/icon/copa/keyboard-arrow-left.svelte';
	import KeyboardArrowRight from '../lib/components/icon/copa/keyboard-arrow-right.svelte';
	import KeyboardArrowUp from '../lib/components/icon/copa/keyboard-arrow-up.svelte';
	import LanguageFalse from '../lib/components/icon/copa/language-false.svelte';
	import LanguageFilled from '../lib/components/icon/copa/language-filled.svelte';
	import LavatoryFalse from '../lib/components/icon/copa/lavatory-false.svelte';
	import LavatoryFilled from '../lib/components/icon/copa/lavatory-filled.svelte';
	import LockFalse from '../lib/components/icon/copa/lock-false.svelte';
	import LockFilled from '../lib/components/icon/copa/lock-filled.svelte';
	import MapPin from '../lib/components/icon/copa/map-pin.svelte';
	import Medicine from '../lib/components/icon/copa/medicine.svelte';
	import Messages from '../lib/components/icon/copa/messages.svelte';
	import Minus from '../lib/components/icon/copa/minus.svelte';
	import PagesFirst from '../lib/components/icon/copa/pages-first.svelte';
	import PagesLast from '../lib/components/icon/copa/pages-last.svelte';
	import PassportFalse from '../lib/components/icon/copa/passport-false.svelte';
	import PassportTrue from '../lib/components/icon/copa/passport-true.svelte';
	import Phone from '../lib/components/icon/copa/phone.svelte';
	import Plus from '../lib/components/icon/copa/plus.svelte';
	import Print from '../lib/components/icon/copa/print.svelte';
	import Profile from '../lib/components/icon/copa/profile.svelte';
	import QrIconBackground from '../lib/components/icon/copa/qr-icon-background.svelte';
	import QrIconFalse from '../lib/components/icon/copa/qr-icon-false.svelte';
	import ReadReceipt from '../lib/components/icon/copa/read-receipt.svelte';
	import Refresh from '../lib/components/icon/copa/refresh.svelte';
	import RefreshLocation from '../lib/components/icon/copa/refresh-location.svelte';
	import Requirements from '../lib/components/icon/copa/requirements.svelte';
	import RestrictedItemsBattery from '../lib/components/icon/copa/restricted-items-battery.svelte';
	import RestrictedItemsFlammable from '../lib/components/icon/copa/restricted-items-flammable.svelte';
	import RestrictedItemsGaseous from '../lib/components/icon/copa/restricted-items-gaseous.svelte';
	import RestrictedItemsPowder from '../lib/components/icon/copa/restricted-items-powder.svelte';
	import RestrictedItemsWeapon from '../lib/components/icon/copa/restricted-items-weapon.svelte';
	import Retail from '../lib/components/icon/copa/retail.svelte';
	import RoundedWarningFalse from '../lib/components/icon/copa/rounded-warning-false.svelte';
	import RoundedWarningFilled from '../lib/components/icon/copa/rounded-warning-filled.svelte';
	import Save from '../lib/components/icon/copa/save.svelte';
	import Savings from '../lib/components/icon/copa/savings.svelte';
	import ScrollIndicatorFalse from '../lib/components/icon/copa/scroll-indicator-false.svelte';
	import ScrollIndicatorFilled from '../lib/components/icon/copa/scroll-indicator-filled.svelte';
	import Search from '../lib/components/icon/copa/search.svelte';
	import SearchModeMc from '../lib/components/icon/copa/search-mode-mc.svelte';
	import SearchModeOw from '../lib/components/icon/copa/search-mode-ow.svelte';
	import SearchModeRt from '../lib/components/icon/copa/search-mode-rt.svelte';
	import Seat from '../lib/components/icon/copa/seat.svelte';
	import SeatAttributesDeviceHolder from '../lib/components/icon/copa/seat-attributes-device-holder.svelte';
	import SeatAttributesDeviceHolder2 from '../lib/components/icon/copa/seat-attributes-device-holder2.svelte';
	import SeatAttributesDreams from '../lib/components/icon/copa/seat-attributes-dreams.svelte';
	import SeatAttributesLegRest from '../lib/components/icon/copa/seat-attributes-leg-rest.svelte';
	import SeatAttributesLight from '../lib/components/icon/copa/seat-attributes-light.svelte';
	import SeatAttributesMovie from '../lib/components/icon/copa/seat-attributes-movie.svelte';
	import SeatAttributesOutlet from '../lib/components/icon/copa/seat-attributes-outlet.svelte';
	import SeatAttributesStylishSeat from '../lib/components/icon/copa/seat-attributes-stylish-seat.svelte';
	import Share from '../lib/components/icon/copa/share.svelte';
	import SocialEmail from '../lib/components/icon/copa/social-email.svelte';
	import SpecialServicesHearing from '../lib/components/icon/copa/special-services-hearing.svelte';
	import SpecialServicesMeals from '../lib/components/icon/copa/special-services-meals.svelte';
	import SpecialServicesPet from '../lib/components/icon/copa/special-services-pet.svelte';
	import SpecialServicesWheelchair from '../lib/components/icon/copa/special-services-wheelchair.svelte';
	import SpinningLoader from '../lib/components/icon/copa/spinning-loader.svelte';
	import StarFalse from '../lib/components/icon/copa/star-false.svelte';
	import StarFilled from '../lib/components/icon/copa/star-filled.svelte';
	import SubstractFalse from '../lib/components/icon/copa/substract-false.svelte';
	import SubstractFilled from '../lib/components/icon/copa/substract-filled.svelte';
	import SunFalse from '../lib/components/icon/copa/sun-false.svelte';
	import SunFilled from '../lib/components/icon/copa/sun-filled.svelte';
	import Support from '../lib/components/icon/copa/support.svelte';
	import SwapHorizontal from '../lib/components/icon/copa/swap-horizontal.svelte';
	import SwapVertical from '../lib/components/icon/copa/swap-vertical.svelte';
	import ThickArrowDefaultLeft from '../lib/components/icon/copa/thick-arrow-default-left.svelte';
	import ThickArrowDefaultRight from '../lib/components/icon/copa/thick-arrow-default-right.svelte';
	import ThickArrowSmallLeft from '../lib/components/icon/copa/thick-arrow-small-left.svelte';
	import ThickArrowSmallRight from '../lib/components/icon/copa/thick-arrow-small-right.svelte';
	import TicketDefault from '../lib/components/icon/copa/ticket-default.svelte';
	import TicketTrue from '../lib/components/icon/copa/ticket-true.svelte';
	import TimeFalse from '../lib/components/icon/copa/time-false.svelte';
	import TimeFilled from '../lib/components/icon/copa/time-filled.svelte';
	import TrashBoardingGate from '../lib/components/icon/copa/trash-boarding-gate.svelte';
	import TrashFalse from '../lib/components/icon/copa/trash-false.svelte';
	import TrashFilled from '../lib/components/icon/copa/trash-filled.svelte';
	import TrashGateEnter from '../lib/components/icon/copa/trash-gate-enter.svelte';
	import Travelers from '../lib/components/icon/copa/travelers.svelte';
	import UnlockFalse from '../lib/components/icon/copa/unlock-false.svelte';
	import UnlockFilled from '../lib/components/icon/copa/unlock-filled.svelte';
	import Upload from '../lib/components/icon/copa/upload.svelte';
	import UserAccFalse from '../lib/components/icon/copa/user-acc-false.svelte';
	import UserAccFilled from '../lib/components/icon/copa/user-acc-filled.svelte';
	import Visibility from '../lib/components/icon/copa/visibility.svelte';
	import VisivilityOff from '../lib/components/icon/copa/visivility-off.svelte';
	import VisivilityOn from '../lib/components/icon/copa/visivility-on.svelte';
	import Webcall from '../lib/components/icon/copa/webcall.svelte';

	type IconItem = { name: string; component: Component<{ class?: string }> };

	const icons: IconItem[] = [
		{ name: 'add-false', component: AddFalse },
		{ name: 'add-filled', component: AddFilled },
		{ name: 'airline-app', component: AirlineApp },
		{ name: 'alarm-default', component: AlarmDefault },
		{ name: 'alarm-filled', component: AlarmFilled },
		{ name: 'arrow-down', component: ArrowDown },
		{ name: 'arrow-left', component: ArrowLeft },
		{ name: 'arrow-right', component: ArrowRight },
		{ name: 'arrow-up', component: ArrowUp },
		{ name: 'baby', component: Baby },
		{ name: 'baggage', component: Baggage },
		{ name: 'bags-backpack', component: BagsBackpack },
		{ name: 'bags-carry-on', component: BagsCarryOn },
		{ name: 'bags-luggage-false', component: BagsLuggageFalse },
		{ name: 'bags-luggage-filled', component: BagsLuggageFilled },
		{ name: 'bags-no-bag', component: BagsNoBag },
		{ name: 'bags-suitecase', component: BagsSuitecase },
		{ name: 'banks-credit-card', component: BanksCreditCard },
		{ name: 'calendar-false', component: CalendarFalse },
		{ name: 'calendar-filled', component: CalendarFilled },
		{ name: 'cancel-false', component: CancelFalse },
		{ name: 'cancel-filled', component: CancelFilled },
		{ name: 'cart', component: Cart },
		{ name: 'charges', component: Charges },
		{ name: 'check-circle-false', component: CheckCircleFalse },
		{ name: 'check-circle-icon', component: CheckCircleIcon },
		{ name: 'city', component: City },
		{ name: 'close', component: Close },
		{ name: 'connect-miles', component: ConnectMiles },
		{ name: 'constraints-false', component: ConstraintsFalse },
		{ name: 'constraints-filled', component: ConstraintsFilled },
		{ name: 'cookie-false', component: CookieFalse },
		{ name: 'cookie-filled', component: CookieFilled },
		{ name: 'copy-paste-false', component: CopyPasteFalse },
		{ name: 'copy-paste-filled', component: CopyPasteFilled },
		{ name: 'cross', component: Cross },
		{ name: 'currency-false', component: CurrencyFalse },
		{ name: 'currency-fares', component: CurrencyFares },
		{ name: 'currency-filled', component: CurrencyFilled },
		{ name: 'cursor-closedhand-1', component: CursorClosedhand1 },
		{ name: 'cursor-cursor-1', component: CursorCursor1 },
		{ name: 'cursor-filter-simple', component: CursorFilterSimple },
		{ name: 'cursor-notallowed-1', component: CursorNotallowed1 },
		{ name: 'cursor-openhand', component: CursorOpenhand },
		{ name: 'cursor-pointinghand', component: CursorPointinghand },
		{ name: 'customer-suport-default', component: CustomerSuportDefault },
		{ name: 'customer-suport-variant2', component: CustomerSuportVariant2 },
		{ name: 'dot', component: Dot },
		{ name: 'download', component: Download },
		{ name: 'drinks-false', component: DrinksFalse },
		{ name: 'drinks-filled', component: DrinksFilled },
		{ name: 'edit', component: Edit },
		{ name: 'ellipsis', component: Ellipsis },
		{ name: 'email-read', component: EmailRead },
		{ name: 'error-false', component: ErrorFalse },
		{ name: 'error-filled', component: ErrorFilled },
		{ name: 'experience', component: Experience },
		{ name: 'external', component: External },
		{ name: 'filter-false', component: FilterFalse },
		{ name: 'filter-filled', component: FilterFilled },
		{ name: 'flight', component: Flight },
		{ name: 'flight-arriving', component: FlightArriving },
		{ name: 'flight-departing', component: FlightDeparting },
		{ name: 'flight-disruption', component: FlightDisruption },
		{ name: 'flight-down', component: FlightDown },
		{ name: 'flight-forward-tilted', component: FlightForwardTilted },
		{ name: 'flight-left', component: FlightLeft },
		{ name: 'flight-right', component: FlightRight },
		{ name: 'flight-up', component: FlightUp },
		{ name: 'gift-filled2', component: GiftFilled2 },
		{ name: 'gift-true', component: GiftTrue },
		{ name: 'globe', component: Globe },
		{ name: 'half-star-false', component: HalfStarFalse },
		{ name: 'half-star-filled', component: HalfStarFilled },
		{ name: 'hamburger', component: Hamburger },
		{ name: 'heart-false', component: HeartFalse },
		{ name: 'heart-filled', component: HeartFilled },
		{ name: 'help-false', component: HelpFalse },
		{ name: 'help-filled', component: HelpFilled },
		{ name: 'history', component: History },
		{ name: 'info-false', component: InfoFalse },
		{ name: 'info-filled', component: InfoFilled },
		{ name: 'info-rounded', component: InfoRounded },
		{ name: 'info-rounded-filled', component: InfoRoundedFilled },
		{ name: 'itinerary-change', component: ItineraryChange },
		{ name: 'itinerary-true', component: ItineraryTrue },
		{ name: 'keyboard-arrow-down', component: KeyboardArrowDown },
		{ name: 'keyboard-arrow-left', component: KeyboardArrowLeft },
		{ name: 'keyboard-arrow-right', component: KeyboardArrowRight },
		{ name: 'keyboard-arrow-up', component: KeyboardArrowUp },
		{ name: 'language-false', component: LanguageFalse },
		{ name: 'language-filled', component: LanguageFilled },
		{ name: 'lavatory-false', component: LavatoryFalse },
		{ name: 'lavatory-filled', component: LavatoryFilled },
		{ name: 'lock-false', component: LockFalse },
		{ name: 'lock-filled', component: LockFilled },
		{ name: 'map-pin', component: MapPin },
		{ name: 'medicine', component: Medicine },
		{ name: 'messages', component: Messages },
		{ name: 'minus', component: Minus },
		{ name: 'pages-first', component: PagesFirst },
		{ name: 'pages-last', component: PagesLast },
		{ name: 'passport-false', component: PassportFalse },
		{ name: 'passport-true', component: PassportTrue },
		{ name: 'phone', component: Phone },
		{ name: 'plus', component: Plus },
		{ name: 'print', component: Print },
		{ name: 'profile', component: Profile },
		{ name: 'qr-icon-background', component: QrIconBackground },
		{ name: 'qr-icon-false', component: QrIconFalse },
		{ name: 'read-receipt', component: ReadReceipt },
		{ name: 'refresh', component: Refresh },
		{ name: 'refresh-location', component: RefreshLocation },
		{ name: 'requirements', component: Requirements },
		{ name: 'restricted-items-battery', component: RestrictedItemsBattery },
		{ name: 'restricted-items-flammable', component: RestrictedItemsFlammable },
		{ name: 'restricted-items-gaseous', component: RestrictedItemsGaseous },
		{ name: 'restricted-items-powder', component: RestrictedItemsPowder },
		{ name: 'restricted-items-weapon', component: RestrictedItemsWeapon },
		{ name: 'retail', component: Retail },
		{ name: 'rounded-warning-false', component: RoundedWarningFalse },
		{ name: 'rounded-warning-filled', component: RoundedWarningFilled },
		{ name: 'save', component: Save },
		{ name: 'savings', component: Savings },
		{ name: 'scroll-indicator-false', component: ScrollIndicatorFalse },
		{ name: 'scroll-indicator-filled', component: ScrollIndicatorFilled },
		{ name: 'search', component: Search },
		{ name: 'search-mode-mc', component: SearchModeMc },
		{ name: 'search-mode-ow', component: SearchModeOw },
		{ name: 'search-mode-rt', component: SearchModeRt },
		{ name: 'seat', component: Seat },
		{ name: 'seat-attributes-device-holder', component: SeatAttributesDeviceHolder },
		{ name: 'seat-attributes-device-holder2', component: SeatAttributesDeviceHolder2 },
		{ name: 'seat-attributes-dreams', component: SeatAttributesDreams },
		{ name: 'seat-attributes-leg-rest', component: SeatAttributesLegRest },
		{ name: 'seat-attributes-light', component: SeatAttributesLight },
		{ name: 'seat-attributes-movie', component: SeatAttributesMovie },
		{ name: 'seat-attributes-outlet', component: SeatAttributesOutlet },
		{ name: 'seat-attributes-stylish-seat', component: SeatAttributesStylishSeat },
		{ name: 'share', component: Share },
		{ name: 'social-email', component: SocialEmail },
		{ name: 'special-services-hearing', component: SpecialServicesHearing },
		{ name: 'special-services-meals', component: SpecialServicesMeals },
		{ name: 'special-services-pet', component: SpecialServicesPet },
		{ name: 'special-services-wheelchair', component: SpecialServicesWheelchair },
		{ name: 'spinning-loader', component: SpinningLoader },
		{ name: 'star-false', component: StarFalse },
		{ name: 'star-filled', component: StarFilled },
		{ name: 'substract-false', component: SubstractFalse },
		{ name: 'substract-filled', component: SubstractFilled },
		{ name: 'sun-false', component: SunFalse },
		{ name: 'sun-filled', component: SunFilled },
		{ name: 'support', component: Support },
		{ name: 'swap-horizontal', component: SwapHorizontal },
		{ name: 'swap-vertical', component: SwapVertical },
		{ name: 'thick-arrow-default-left', component: ThickArrowDefaultLeft },
		{ name: 'thick-arrow-default-right', component: ThickArrowDefaultRight },
		{ name: 'thick-arrow-small-left', component: ThickArrowSmallLeft },
		{ name: 'thick-arrow-small-right', component: ThickArrowSmallRight },
		{ name: 'ticket-default', component: TicketDefault },
		{ name: 'ticket-true', component: TicketTrue },
		{ name: 'time-false', component: TimeFalse },
		{ name: 'time-filled', component: TimeFilled },
		{ name: 'trash-boarding-gate', component: TrashBoardingGate },
		{ name: 'trash-false', component: TrashFalse },
		{ name: 'trash-filled', component: TrashFilled },
		{ name: 'trash-gate-enter', component: TrashGateEnter },
		{ name: 'travelers', component: Travelers },
		{ name: 'unlock-false', component: UnlockFalse },
		{ name: 'unlock-filled', component: UnlockFilled },
		{ name: 'upload', component: Upload },
		{ name: 'user-acc-false', component: UserAccFalse },
		{ name: 'user-acc-filled', component: UserAccFilled },
		{ name: 'visibility', component: Visibility },
		{ name: 'visivility-off', component: VisivilityOff },
		{ name: 'visivility-on', component: VisivilityOn },
		{ name: 'webcall', component: Webcall }
	];
</script>

<div class="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-3 p-6">
	{#each icons as icon (icon.name)}
		{@const IconComponent = icon.component}
		<div
			class="flex min-h-28 flex-col items-center justify-center gap-3 rounded border border-grey-200 bg-common-white p-3"
		>
			<IconComponent class="size-7 text-grey-500" />
			<span class="max-w-full break-words text-center font-body text-d3 text-grey-600"
				>{icon.name}</span
			>
		</div>
	{/each}
</div>
