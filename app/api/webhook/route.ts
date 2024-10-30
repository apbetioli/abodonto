import { verifyWebhookSignature } from '@hygraph/utils';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const body = await request.text();

    const secret = process.env.HYGRAPH_WEBHOOK_SECRET;

    if (secret) {
      const signature = request.headers.get('gcms-signature') || '';

      const isValid = verifyWebhookSignature({ body, signature, secret });

      if (!isValid) {
        console.log('[Next.js] Invalid signature:', signature);
        console.log('body', body);
        return new Response('Invalid signature.', {
          status: 400,
        });
      }
    }

    const object = JSON.parse(body);
    console.log('[Next.js] Revalidating /', object.data.slug);
    if (object.data.slug === 'home') {
      revalidatePath('/');
    } else {
      revalidatePath(`/${object.data.slug}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new Response(`Webhook error: ${message}`, {
      status: 400,
    });
  }

  return new Response('Success!', {
    status: 200,
  });
}
