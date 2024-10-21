import { Review } from '@/graphql/gql/graphql';

export default function ReviewComponent({ review }: { review: Review }) {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="space-y-2">
        <p className="text-gray-500 italic">{review.text}</p>
        <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
          - {review.patientName}
        </p>
      </div>
    </div>
  );
}
