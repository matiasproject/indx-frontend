
export function destructuringDataPodcasts(podcast) {
  if (!podcast) {
    return null;
  }

  const {
    id: { attributes: { 'im:id': podcastId } },
    'im:name': { label: podcastName },
    'im:artist': { label: artist },
    'im:image': image,
    summary: { label: description },
  } = podcast;

  const { label: imageUrl } = image[2];

  return {
    podcastId,
    podcastName,
    artist,
    imageUrl,
    description,
  };
}
