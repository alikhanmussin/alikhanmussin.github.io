import ProjectBenchmarks from './ProjectBenchmarks'

const source = 'https://github.com/alikhanmussin/mnist-handwriting-classifier'
const stack = ['Python', 'TensorFlow / Keras', 'CNNs', 'FastAPI', 'NumPy', 'scikit-learn', 'pytest', 'GitHub Actions']
const metrics = [
  { value: '82%', label: 'Normal CNN', context: '41/50 custom test images' },
  { value: '90%', label: 'With data augmentation', context: '45/50 custom test images' },
  { value: '94%', label: 'Fine-tuned CNN', context: '47/50 held-out custom test images' },
]

export default function MnistProject() {
  return (
    <section className="featured-section mnist-project" id="mnist" aria-labelledby="mnist-title">
      <div className="section-heading"><p className="eyebrow">01 / FEATURED PROJECT</p><span>Personal project · 2026</span></div>
      <div className="project-heading">
        <div><h2 id="mnist-title">MNIST Handwriting Classifier</h2><p className="project-subtitle">From handwritten pixels to a prediction.</p></div>
        <a className="button source-button" href={source} target="_blank" rel="noreferrer" aria-label="View MNIST Handwriting Classifier source on GitHub">View source <span aria-hidden="true">↗</span></a>
      </div>
      <div className="project-layout">
        <figure className="project-preview mnist-preview">
          <a className="screenshot-link" href="/images/mnist-pipeline.svg" target="_blank" rel="noreferrer" aria-label="Open full MNIST processing diagram in a new tab">
            <img src="/images/mnist-pipeline.svg" width="1200" height="720" loading="lazy" alt="Monochrome diagram: a handwritten seven over a 28 by 28 grid passes through image preprocessing and CNN layers to a predicted seven." />
          </a>
          <figcaption>Handwriting → preprocessing → CNN → prediction<span>Illustrative pipeline</span></figcaption>
        </figure>
        <div className="project-story">
          <p className="project-description">Built an end-to-end handwritten digit recognition system with CNN-based classification, custom image preprocessing, fine-tuning, and FastAPI inference.</p>
          <ol className="feature-list">
            <li><span>01</span><div><h3>Prepare the image</h3><p>Grayscale conversion, normalization, cropping, and centering transform handwriting into a 28 × 28 input.</p></div></li>
            <li><span>02</span><div><h3>Improve through evaluation</h3><p>Data augmentation and custom handwriting fine-tuning improved test accuracy from 82% to 90% to 94%.</p></div></li>
            <li><span>03</span><div><h3>Make predictions usable</h3><p>A FastAPI endpoint returns the predicted digit, confidence, an uncertainty flag, and Top-3 predictions. pytest and GitHub Actions verify preprocessing and API behavior.</p></div></li>
          </ol>
        </div>
      </div>
      <ProjectBenchmarks name="MNIST Handwriting Classifier" metrics={metrics} caption="CUSTOM HANDWRITING BENCHMARK · 50 HELD-OUT IMAGES" note="All three models were evaluated on the same held-out 50-image custom handwriting test set, never used for fine-tuning. These are test-set results, not production accuracy." />
      <ul className="project-stack" aria-label="MNIST technologies">{stack.map(technology => <li key={technology}>{technology}</li>)}</ul>
      <details className="architecture">
        <summary>Training & evaluation <span aria-hidden="true">+</span></summary>
        <div className="architecture-grid">
          <div><h3>Separate training data</h3><p>A separate 100-image custom handwriting dataset supplied 80 fine-tuning images and 20 validation images. The 50 test images stayed outside this split.</p></div>
          <div><h3>Inference API</h3><p><code>POST /predict-image</code> accepts a handwritten digit image and returns confidence, an uncertainty flag, and the three most likely classes.</p></div>
          <div><h3>Technical evidence</h3><p>Inspect the evaluation and API output in the project repository.</p><ul className="evidence-links"><li><a href={`${source}/blob/main/docs/screenshots/confusion_matrix.png`} target="_blank" rel="noreferrer">Confusion matrix ↗</a></li><li><a href={`${source}/blob/main/docs/screenshots/api_prediction.png`} target="_blank" rel="noreferrer">FastAPI prediction output ↗</a></li></ul></div>
        </div>
      </details>
    </section>
  )
}
