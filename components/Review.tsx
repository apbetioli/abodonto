import { Review } from '@/graphql/gql/graphql';

export default function ReviewComponent({ review }: { review: Review }) {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="space-y-2">
        <p className="italic text-gray-500">{review.text}</p>
        <p className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text font-semibold text-transparent">
          - {review.patientName}
        </p>
      </div>
    </div>
  );
}
