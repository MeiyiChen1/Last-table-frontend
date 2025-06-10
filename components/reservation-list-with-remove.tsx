import { Button, View } from "react-native";
import ReservationCard from "./reservation-card";

export type Reservation = {
  id: string;
  time: string;
  available_seats: number;
  restaurant_name: string;
  restaurant_type: string;
};

type Props = {
  reservations: Reservation[];
  onRemove?: (id: string) => void;
};

export default function ReservationListWithRemove({ reservations, onRemove }: Props) {
  return (
    <View>
      {reservations.map((r) => (
        <View key={r.id}>
          <ReservationCard reservation={r} />
          {onRemove && (
            <Button title="Remover" onPress={() => onRemove(r.id)} />
          )}
        </View>
      ))}
    </View>
  );
}