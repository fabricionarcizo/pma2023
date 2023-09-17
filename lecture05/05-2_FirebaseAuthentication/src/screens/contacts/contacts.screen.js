import React from "react";
import { FlatList } from "react-native";

import {
  ContactsContent,
  ContactAvatar,
  ContactLetter,
  ItemSeparator,
  ContactDetails,
  ContactName,
  ContactNumber,
} from "./contacts.styles";
import { SafeArea } from "../../components/safe-area.component";

const CONTACTS = [
  { name: "Chuck Norris", number: "(585) 421-6357" },
  { name: "Bruce Lee", number: "(430) 146-0428" },
  { name: "Steven Seagal", number: "(480) 400-4611" },
  { name: "Tony Jaa", number: "(445) 635-0212" },
  { name: "Jet Li", number: "(854) 892-1825" },
  { name: "Jean Claude Van Damme", number: "(435) 782-9459" },
  { name: "Sonny Chiba", number: "(779) 355-0634" },
  { name: "Jackie Chan", number: "(307) 621-7733" },
  { name: "Iko Uwais", number: "(364) 036-8385" },
  { name: "Donnie Yen", number: "(410) 032-1031" },
  { name: "Gordon Liu", number: "(838) 197-0532" },
  { name: "Chow Yun-Fat", number: "(929) 155-5052" },
  { name: "Sammo Hung", number: "(970) 545-9067" },
  { name: "Toshiro Mifune", number: "(647) 980-5506" },
  { name: "Phillip Rhee", number: "(424) 941-1770" },
  { name: "Cheng Pei-Pei", number: "(701) 485-6544" },
  { name: "Bolo Yeung", number: "(406) 029-2922" },
  { name: "Jeff Speakman", number: "(281) 633-5555" },
  { name: "Bill Superfoot Wallace", number: "(949) 464-2800" },
  { name: "Dragon Lee", number: "(318) 913-4626" },
];

const ContactItem = React.memo(({ item }) => {
  return (
    <ContactsContent>
      <ContactAvatar>
        <ContactLetter>{item.name.slice(0, 1).toUpperCase()}</ContactLetter>
      </ContactAvatar>
      <ContactDetails>
        <ContactName>{item.name}</ContactName>
        <ContactNumber>{item.number}</ContactNumber>
      </ContactDetails>
    </ContactsContent>
  );
});

export const ContactsScreen = () => {
  const renderItem = ({ item }) => <ContactItem item={item} />;

  return (
    <SafeArea>
      <FlatList
        data={CONTACTS}
        keyExtractor={(_, i) => String(i)}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeArea>
  );
};
