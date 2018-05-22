import {Link, Icon} from "cx/widgets";

const NavLink = ({ icon, text, href }) => <cx>
    <Link href={href} mod="footer" url-bind="url">
        <Icon name={icon} />
        <div>{text}</div>
    </Link>
</cx>

export default <cx>
    <NavLink icon="fa-clone" text="Tabs" href="~/tabs" />
    <NavLink icon="fa-calendar-alt" text="Calendar" href="~/calendar" />
    <NavLink icon="fa-address-book" text="Contacts" href="~/contacts" />
    <NavLink icon="fa-comments" text="Comments" href="~/comments" />
</cx>