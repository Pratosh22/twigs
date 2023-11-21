import React from 'react';
import { twigsComponentLoader, twigsIconLoader } from './twigs-loader';
import { Slider } from '@sparrowengg/twigs-react';

const ReactLiveScope = {
  React,
  ...React,
  Button: twigsComponentLoader("Button"),
  Flex: twigsComponentLoader("Flex"),
  Grid: twigsComponentLoader("Grid"),
  Input: twigsComponentLoader("Input"),
  Checkbox: twigsComponentLoader("Checkbox"),
  Radio: twigsComponentLoader("Radio"),
  Select: twigsComponentLoader("Select"),
  FormInput: twigsComponentLoader("FormInput"),
  FormLabel: twigsComponentLoader("FormLabel"),
  RadioGroup: twigsComponentLoader("RadioGroup"),
  Switch: twigsComponentLoader("Switch"),
  Slider,
  FormHelperText: twigsComponentLoader("FormHelperText"),
  Text: twigsComponentLoader("Text"),
  Heading: twigsComponentLoader("Heading"),
  Link: twigsComponentLoader("Link"),
  Pagination: twigsComponentLoader("Pagination"),
  Stepper: twigsComponentLoader("Stepper"),
  StepperItem: twigsComponentLoader("StepperItem"),
  Tabs: twigsComponentLoader("Tabs"),
  TabsList: twigsComponentLoader("TabsList"),
  TabsTrigger: twigsComponentLoader("TabsTrigger"),
  TabsContent: twigsComponentLoader("TabsContent"),
  ArrowLeftIcon: twigsIconLoader("ArrowLeftIcon"),
  SearchIcon: twigsIconLoader("SearchIcon"),
  UserIcon: twigsIconLoader("UserIcon"),
  Chip: twigsComponentLoader("Chip"),
  Avatar: twigsComponentLoader("Avatar"),
  AvatarBadge: twigsComponentLoader("AvatarBadge"),
  AvatarGroup: twigsComponentLoader("AvatarGroup"),
  Calendar: twigsComponentLoader("Calendar"),
  DatePicker: twigsComponentLoader("DatePicker"),
  CalendarRange: twigsComponentLoader("CalendarRange"),
  Alert: twigsComponentLoader("Alert"),
  Toastr: twigsComponentLoader("Toastr"),
  toast: twigsComponentLoader("toast"),
  ToastAction: twigsComponentLoader("ToastAction"),
  Tooltip: twigsComponentLoader("Tooltip"),
  TooltipProvider: twigsComponentLoader("TooltipProvider"),
  Popover: twigsComponentLoader("Popover"),
  PopoverTrigger: twigsComponentLoader("PopoverTrigger"),
  PopoverContent: twigsComponentLoader("PopoverContent"),
  PopoverClose: twigsComponentLoader("PopoverClose"),
  PopoverArrow: twigsComponentLoader("PopoverArrow"),
  HoverCard: twigsComponentLoader("HoverCard"),
  HoverCardTrigger: twigsComponentLoader("HoverCardTrigger"),
  HoverCardContent: twigsComponentLoader("HoverCardContent"),
  DropdownMenu: twigsComponentLoader("DropdownMenu"),
  DropdownMenuTrigger: twigsComponentLoader("DropdownMenuTrigger"),
  DropdownMenuContent: twigsComponentLoader("DropdownMenuContent"),
  DropdownMenuItem: twigsComponentLoader("DropdownMenuItem"),
  DropdownMenuSub: twigsComponentLoader("DropdownMenuSub"),
  DropdownMenuSubTrigger: twigsComponentLoader("DropdownMenuSubTrigger"),
  DropdownMenuCheckboxItem: twigsComponentLoader("DropdownMenuCheckboxItem"),
  DropdownMenuLabel: twigsComponentLoader("DropdownMenuLabel"),
  DropdownMenuRadioGroup: twigsComponentLoader("DropdownMenuRadioGroup"),
  DropdownMenuRadioItem: twigsComponentLoader("DropdownMenuRadioItem"),
  DropdownMenuSeparator: twigsComponentLoader("DropdownMenuSeparator"),
  DropdownMenuSubContent: twigsComponentLoader("DropdownMenuSubContent"),
  Drawer: twigsComponentLoader("Drawer"),
  DrawerHeader: twigsComponentLoader("DrawerHeader"),
  DrawerFooter: twigsComponentLoader("DrawerFooter"),
  DrawerBody: twigsComponentLoader("DrawerBody"),
  Box: twigsComponentLoader("Box"),
  Dialog: twigsComponentLoader("Dialog"),
  DialogTitle: twigsComponentLoader("DialogTitle"),
  DialogDescription: twigsComponentLoader("DialogDescription"),
  DialogClose: twigsComponentLoader("DialogClose"),
  DialogTrigger: twigsComponentLoader("DialogTrigger"),
  DialogContent: twigsComponentLoader("DialogContent"),
  IconButton: twigsComponentLoader("IconButton"),
  AlertDialog: twigsComponentLoader("AlertDialog"),
  AlertDialogAction: twigsComponentLoader("AlertDialogAction"),
  AlertDialogActions: twigsComponentLoader("AlertDialogActions"),
  AlertDialogCancel: twigsComponentLoader("AlertDialogCancel"),
  AlertDialogContent: twigsComponentLoader("AlertDialogContent"),
  AlertDialogDescription: twigsComponentLoader("AlertDialogDescription"),
  AlertDialogTitle: twigsComponentLoader("AlertDialogTitle"),
  AlertDialogTrigger: twigsComponentLoader("AlertDialogTrigger"),
  Accordion: twigsComponentLoader("Accordion"),
  AccordionContent: twigsComponentLoader("AccordionContent"),
  AccordionItem: twigsComponentLoader("AccordionItem"),
  AccordionTrigger: twigsComponentLoader("AccordionTrigger"),
};
export default ReactLiveScope;
