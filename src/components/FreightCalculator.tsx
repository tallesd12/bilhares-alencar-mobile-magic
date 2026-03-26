import { useState } from "react";
import { Truck } from "lucide-react";

const FreightCalculator = () => {
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const km = parseFloat(distance);
    if (isNaN(km) || km <= 0) return;
    setResult(km * 5 * 2);
  };

  return (
    <section className="container py-10">
      <div className="bg-card border border-border rounded-xl p-6 md:p-8 max-w-md mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/20 rounded-lg">
            <Truck className="text-primary" size={24} />
          </div>
          <h2 className="text-xl font-display font-bold">Calculadora de Frete</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-6 font-body">
          Informe a distância em km até o local de entrega.
        </p>
        <div className="flex gap-3">
          <input
            type="number"
            min="1"
            placeholder="Distância (km)"
            value={distance}
            onChange={(e) => {
              setDistance(e.target.value);
              setResult(null);
            }}
            onKeyDown={(e) => e.key === "Enter" && calculate()}
            className="flex-1 bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={calculate}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold text-lg hover:bg-primary/80 transition-colors active:scale-95"
          >
            Calcular
          </button>
        </div>
        {result !== null && (
          <div className="mt-6 bg-primary/10 border border-primary/30 rounded-lg p-4 text-center animate-in fade-in">
            <p className="text-muted-foreground text-sm font-body">Valor estimado do frete:</p>
            <p className="text-3xl font-display font-bold text-primary mt-1">
              R$ {result.toFixed(2).replace(".", ",")}
            </p>
            <p className="text-xs text-muted-foreground mt-2 font-body">
              ({distance} km × R$ 5,00 × 2 = ida e volta)
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FreightCalculator;
